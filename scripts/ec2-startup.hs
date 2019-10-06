curl --silent --location https://rpm.nodesource.com/setup_8.x | sudo bash -
sudo yum install -y nodejs
sudo yum install -y git
git clone https://github.com/goutamsh/node-app-aws-testing.git
cd node-app-aws-testing
npm i
node index.js

--Base 64

Y3VybCAtLXNpbGVudCAtLWxvY2F0aW9uIGh0dHBzOi8vcnBtLm5vZGVzb3VyY2UuY29tL3NldHVwXzgueCB8IHN1ZG8gYmFzaCAtCnN1ZG8geXVtIGluc3RhbGwgLXkgbm9kZWpzCnN1ZG8geXVtIGluc3RhbGwgLXkgZ2l0CmdpdCBjbG9uZSBodHRwczovL2dpdGh1Yi5jb20vZ291dGFtc2gvbm9kZS1hcHAtYXdzLXRlc3RpbmcuZ2l0CmNkIG5vZGUtYXBwLWF3cy10ZXN0aW5nCm5wbSBpCm5vZGUgaW5kZXguanM