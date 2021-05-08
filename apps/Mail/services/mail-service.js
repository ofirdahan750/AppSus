import { utilService } from '../../../services/util-service.js'
import { storageService } from '../../../services/async-storage.service.js'



const EMAIL_KEY = 'emails';

export const EmailService = {
    query,
    remove,
    getById,
    save,
    post
}
_createEmails()
function remove(emailId) {
    return storageService.remove(EMAIL_KEY, emailId)
}

function getById(id) {
    return storageService.get(EMAIL_KEY, id)
}


function query() {
    return storageService.query(EMAIL_KEY)
}



function _createEmails() {
    let emails = utilService.loadFromStorage(EMAIL_KEY)
    if (!emails || !emails.length) {

        emails = []
        for (let i = 0; i < 250; i++) {
           let currTimeStamp = utilService.randomIntFromInterval(1273330510, Date.now())
            let newMail =

            {
                'id': utilService.makeId(), //random from util service
                'from': utilService.makeName(), //NAME OF THE THE the sender
                'title': utilService.makeTitle(), //title
                'text': utilService.makeTxt(), //txt body
                'timeStamp': currTimeStamp,
                'date': new Date(currTimeStamp).toISOString(),
                'isRead': false,//IS THE MAIL READ,
                'type': 'inbox'
            }


            emails.push(newMail)
            i++
        }
        utilService.saveToStorage(EMAIL_KEY, emails)
    }
    return emails
}
function save(email) {
    return storageService.put(EMAIL_KEY, email)
}
function post(email) {
    return storageService.post(EMAIL_KEY, email)

}


// function getEmptyMail() {
//     return {
//         'id': utilService.makeId, //random from util service
//         // 'title': '', //title
//         // 'text': '', //txt body
//         'isRead': true,//IS THE MAIL READ
//         'type': 'send'
//     }
// }