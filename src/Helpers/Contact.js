import ENUMS from "./Enums";

const ContactHelper = function(type, data) {
  switch (type) {
    default:
      break;
    case ENUMS.ICONTYPE.EMAIL:
      this.display = data.user.contact.email;
      this.raw = data.user.contact.email;
      break;
    case ENUMS.ICONTYPE.PHONE:
      this.display = "+".concat(
        data.user.contact.phone.countryCode,
        " (0) ",
        data.user.contact.phone.number
      );
      this.raw = "+".concat(
        data.user.contact.phone.countryCode,
        data.user.contact.phone.number.replace(/-/g, "")
      );
      break;
    case ENUMS.ICONTYPE.LINKEDIN:
      this.display = data.user.contact.social.linkedIn;
      this.raw = data.user.contact.social.linkedIn;
      break;
    case ENUMS.ICONTYPE.GITHUB:
      this.display = data.user.contact.social.gitHub;
      this.raw = data.user.contact.social.gitHub;
      break;
  }

  this.link = prefix => {
    if (prefix && prefix.length) {
      return prefix.concat(this.raw);
    }
    return this.raw;
  };
};

export default ContactHelper;
