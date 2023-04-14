const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.updateMemberCount = functions.database.ref('servers/SERVER_ID')
  .onUpdate((change, context) => {
    const newValue = change.after.val();
    const channel = admin
      .firestore()
      .collection('channels')
      .doc('1070589947532288040'); 
    return channel.update({
      name: `Membros: ${newValue}`
    });
  });

