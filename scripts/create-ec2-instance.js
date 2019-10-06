// Imports
const AWS = require('aws-sdk')
const helpers = require('./helpers')

AWS.config.update({region:'us-east-1'})

const ec2 = new AWS.EC2()
// Declare local variables
// TODO: Create an ec2 object
const sgName = 'test-sg'
const keyName = 'my-key-pair'

// Do all the things together

// createInstance(sgName, keyName).then((data) => {
//       console.log('Created instance with:', data)
//     })
//     .catch((err) => {
//       console.error('Failed to create instance with:', err)
//     });

createSecurityGroup(sgName)
.then(() => {
    console.log("SecurityGroup created")
  return createKeyPair(keyName)
})
.then(helpers.persistKeyPair)
.then(() => {
  return createInstance(sgName, keyName)
})
.then((data) => {
  console.log('Created instance with:', data)
})
.catch((err) => {
  console.error('Failed to create instance with:', err)
})

// Create functions

function createSecurityGroup (sgName) {
  
    const param = {
        Description: sgName,
        GroupName:sgName
    }
    return new Promise((resolve, reject) => {

        ec2.createSecurityGroup(param, (err, data) => {
            if(err) reject(err)
            else{
                const param = {
                    GroupId: data.GroupId,
                    IpPermissions:[
                        {
                            IpProtocol:'tcp',
                            FromPort: 22,
                            ToPort: 22,
                            IpRanges:[
                                {
                                    CidrIp:'0.0.0.0/0'
                                }
                            ]
                        },
                        {
                            IpProtocol:'tcp',
                            FromPort: 3000,
                            ToPort: 3000,
                            IpRanges:[
                                {
                                    CidrIp:'0.0.0.0/0'
                                }
                            ]
                        }
                    ]
                }
                ec2.authorizeSecurityGroupIngress(param,(err) =>{
                        if(err) reject(err)
                        else resolve()
                })
            }
        })
    })
}

function createKeyPair (keyName) {
  const param = {
      KeyName : keyName
  }
  return new Promise((resolve, reject) =>{
      ec2.createKeyPair(param, (err, data) => {
          if(err) reject(err)
          else resolve(data)
      })
  })
}

function createInstance (sgName, keyName) {
  const param = {
      ImageId: 'ami-0b69ea66ff7391e80',
      InstanceType: 't2.micro',
      KeyName: keyName,
      MaxCount: 1,
      MinCount: 1,
      SecurityGroups :[
          sgName
      ],
      UserData: 'Y3VybCAtLXNpbGVudCAtLWxvY2F0aW9uIGh0dHBzOi8vcnBtLm5vZGVzb3VyY2UuY29tL3NldHVwXzgueCB8IHN1ZG8gYmFzaCAtCnN1ZG8geXVtIGluc3RhbGwgLXkgbm9kZWpzCnN1ZG8geXVtIGluc3RhbGwgLXkgZ2l0CmdpdCBjbG9uZSBodHRwczovL2dpdGh1Yi5jb20vZ291dGFtc2gvbm9kZS1hcHAtYXdzLXRlc3RpbmcuZ2l0CmNkIG5vZGUtYXBwLWF3cy10ZXN0aW5nCm5wbSBpCm5vZGUgaW5kZXguanM'
    
    }

  return new Promise((resolve, reject) => {
      ec2.runInstances(param, (err, data) => {
            if(err) reject(err)
            else resolve(data)
      })
  })
}