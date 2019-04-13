import data from '../Data/profile.json';

const UserDetails = {
    FirstName : data.user ? data.user.firstName || '' :  '',
    LastName : data.user ? data.user.lastName || '' : '',
    FriendlyName: data.user ? (data.user.firstName || '').concat(' ', (data.user.lastName || '')) : '',
    KnownAs : data.user ? (data.user.knownAs || '') : '',
    Location : data.user ? (data.user.location || '') : '',
    JobTitle : data.user ? (data.user.jobTitle || '') : '',
    SubTitle : data.user ? (data.user.subTitle || '') : '',
    Description : data.user ? (data.user.description || '') : ''
};

const UserContacts = {
    Mobile : data.user ? (''.concat(data.user.contact ? ('+', data.user.contact.phone.countryCode || '', data.user.contact.phone.number || '') : '')) : '',
    Email: data.user && data.user.contact ? (data.user.contact.email || '') : '',
    LinkedIn : data.user && data.user.contact && data.user.contact.social ? (data.user.contact.social.linkedIn || '') : '', 
    Github : data.user && data.user.contact && data.user.contact.social ?  (data.user.contact.social.gitHub || '') : '' 
};

const UserExperiences = data.experiences || [];
const UserProjects = data.projects || [];
const UserSkills = data.skills || [];

export { 
    UserDetails, 
    UserContacts,
    UserExperiences,
    UserProjects,
    UserSkills
};