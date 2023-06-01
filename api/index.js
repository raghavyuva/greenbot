const express = require('express')
const accountSid = 'AC15d39ce7138febaa4c5bafdf3eaf3c6e';
const authToken = '28e8ee4b0b535dcc69dfa54be2a083ef';
const client = require('twilio')(accountSid, authToken);
const app = express()
const port = 8000
var cors = require('cors')

app.use(cors())

app.post('/api/creategroup', (req, res) => {
    fetchgroups()
    res.send('done creating group')
})

const fetchgroups = async () => {
    client.messaging.v1.services
    .create({friendlyName: 'friendly_name'})
    .then(service =>{
        client.chat.v2.services(service.sid)
        .channels
        .list()
        .then((channels) => {
            console.log(channels)
        })
        .catch((error) => {
            console.error('Error fetching channels:', error);
        });
    });
}

const AddMember = async (groupName) => {
    const member = await client.chat.services(serviceId)
        .channels(groupSid)
        .members
        .create({
            identity: phoneNumber,
            roleSid: 'YOUR_ROLE_SID' // Replace with the desired role SID for the member
        });

    console.log('Person added to group:', member.sid);
    res.json({ success: true });
};



app.listen(port, () => {
    console.log(`Green app listening on port ${port}`)
})
