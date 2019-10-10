curl --silent --location https://rpm.nodesource.com/setup_8.x | sudo bash -
sudo yum install -y nodejs
sudo yum install -y git
git clone https://github.com/goutamsh/node-app-aws-testing.git
cd node-app-aws-testing
npm i
node index.js

--Base64

Y3VybCAtLXNpbGVudCAtLWxvY2F0aW9uIGh0dHBzOi8vcnBtLm5vZGVzb3VyY2UuY29tL3NldHVwXzgueCB8IHN1ZG8gYmFzaCAtDQpzdWRvIHl1bSBpbnN0YWxsIC15IG5vZGVqcw0Kc3VkbyB5dW0gaW5zdGFsbCAteSBnaXQNCmdpdCBjbG9uZSBodHRwczovL2dpdGh1Yi5jb20vZ291dGFtc2gvbm9kZS1hcHAtYXdzLXRlc3RpbmcuZ2l0DQpjZCBub2RlLWFwcC1hd3MtdGVzdGluZw0KbnBtIGkNCm5vZGUgaW5kZXguanM=