import CONSTANTS from './Contants';

const ContactHelper = function (type, data) {
    switch(type){
        default: break;
        case CONSTANTS.ICONTYPE.EMAIL:
            this.display = data.user.contact.email;
            this.raw = data.user.contact.email;
            break;
        case CONSTANTS.ICONTYPE.PHONE:
            this.display = '+'.concat(data.user.contact.phone.countryCode, ' (0) ', data.user.contact.phone.number);;
            this.raw = '+'.concat(data.user.contact.phone.countryCode, data.user.contact.phone.number.replace(/'-'/g, ''));
            break;
        case CONSTANTS.ICONTYPE.LINKEDIN:
            this.display = data.user.contact.social.linkedIn;
            this.raw = data.user.contact.social.linkedIn;
            break;
        case CONSTANTS.ICONTYPE.GITHUB:
            this.display = data.user.contact.social.gitHub;
            this.raw = data.user.contact.social.gitHub;
            break;
    }
    
    this.link = prefix => {
        if(prefix && prefix.length){
            return prefix.concat(this.raw);
        }
        return this.raw;
    }
}

export default ContactHelper;