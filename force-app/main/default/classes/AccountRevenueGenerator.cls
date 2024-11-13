public with sharing class AccountRevenueGenerator {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountRevenue(Integer count){
        
            return [SELECT Id, Name, AnnualRevenue FROM Account ORDER BY AnnualRevenue DESC NULLS LAST LIMIT :count];
    }
}