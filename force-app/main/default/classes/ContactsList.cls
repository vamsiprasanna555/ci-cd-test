public with sharing class ContactsList {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList(Integer count) {
    return [SELECT Id,LastName FROM Contact ORDER BY LastName DESC NULLS LAST LIMIT :count];
    }
}