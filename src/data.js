export const data={
    "apiComponentList" : [
        {
            "apiConfigDefinition" : {
                "apiReferenceId" : "637bcffbfb3569276567615a",
                "apiConfigReference" : {
                    "serviceName" : "Ninjacart Profile Microservice",
                    "verb" : "GET",
                    "url" : "/{realm_id}/{user_id}/organization/details"
                },
                "name" : "aggregator-api"
            },
            "mappings" : {
                "pathParamMapping" : {
                    "user_id" : "$$USERID",
                    "realm_id" : "$$REALM_ID"
                },
                "queryParamMapping" : {
                    "userId" : "$$USERID",
                    "fetchUserRealmIdentifierInfo" : true,
                    "fetchUserRealmDetails" : true
                }
            },
            "name" : "aggregator-api"
        },
        {
            "apiConfigDefinition" : {
                "apiReferenceId" : "63bea25630c49e00077b54d5",
                "apiConfigReference" : {
                    "serviceName" : "Ninjapay Services",
                    "verb" : "GET",
                    "url" : "/api/v1/transaction/actions/creditLimit/{mobileNumber}"
                },
                "name" : "get-credit-Limit"
            },
            "mappings" : {
                "pathParamMapping" : {
                    "mobileNumber" : "$.set-bnpl[0].data.userRealmDetail.contactNumber"
                }
            },
            "ruleConfigIdentifier" : {
                "name" : "summary-condition"
            },
            "name" : "get-credit-Limit"
        },
        {
            "apiConfigDefinition" : {
                "apiReferenceId" : "637bcd08fb356922aa57be5e",
                "apiConfigReference" : {
                    "serviceName" : "Ninjacart Profile Microservice",
                    "verb" : "POST",
                    "url" : "/userRealmIdentifierInfo/createUserInfo"
                },
                "name" : "create-user-realm-identifier-info"
            },
            "mappings" : {
                "requestBodyMapping" : {
                    "__SELF" : "$.final"
                }
            },
            "ruleConfigIdentifier" : {
                "name" : "summary-condition"
            },
            "runtimeConfig" : {
                "continueOnError" : true
            },
            "preprocessMapping" : [
                {
                    "mergeMode" : "ARRAY_MAPPING",
                    "lhs" : "$.set-bnpl[1].summary",
                    "output" : "onboarded",
                    "resultMapping" : {
                        "referenceKey" : "$$APPEND($.providerName,_ONBOARDED)",
                        "referenceValue" : "$.onboarded",
                        "userRealmId" : "$.set-bnpl[0].data.userRealmDetail.userRealmId"
                    },
                    "runtimeConfig" : {
                        "mergeCommonProperties" : true
                    }
                },
                {
                    "mergeMode" : "ARRAY_MAPPING",
                    "lhs" : "$.set-bnpl[1].summary",
                    "output" : "status",
                    "resultMapping" : {
                        "referenceKey" : "$$APPEND($.providerName,_STATUS)",
                        "referenceValue" : "$.status",
                        "userRealmId" : "$.set-bnpl[0].data.userRealmDetail.userRealmId"
                    },
                    "runtimeConfig" : {
                        "mergeCommonProperties" : true
                    }
                },
                {
                    "mergeMode" : "ARRAY_MAPPING",
                    "lhs" : "$.set-bnpl[1].summary",
                    "output" : "totalBalance",
                    "resultMapping" : {
                        "referenceKey" : "$$APPEND($.providerName,_TOTALBALANCE)",
                        "referenceValue" : "$.totalBalance",
                        "userRealmId" : "$.set-bnpl[0].data.userRealmDetail.userRealmId"
                    },
                    "runtimeConfig" : {
                        "mergeCommonProperties" : true
                    }
                },
                {
                    "mergeMode" : "ARRAY_MAPPING",
                    "lhs" : "$.set-bnpl[1].badge",
                    "output" : "bnplFlag",
                    "resultMapping" : {
                        "referenceKey" : "bnplFlag",
                        "referenceValue" : "$.bnpl",
                        "userRealmId" : "$.set-bnpl[0].data.userRealmDetail.userRealmId"
                    },
                    "runtimeConfig" : {
                        "mergeCommonProperties" : true
                    }
                },
                {
                    "mergeMode" : "APPEND",
                    "lhs" : "$.status",
                    "rhs" : "$.onboarded",
                    "output" : "intermediate0",
                    "resultMapping" : {

                    },
                    "runtimeConfig" : {
                        "mergeCommonProperties" : true
                    }
                },
                {
                    "mergeMode" : "APPEND",
                    "lhs" : "$.intermediate0",
                    "rhs" : "$.totalBalance",
                    "output" : "intermediate1",
                    "resultMapping" : {

                    },
                    "runtimeConfig" : {
                        "mergeCommonProperties" : true
                    }
                },
                {
                    "mergeMode" : "APPEND",
                    "lhs" : "$.intermediate1",
                    "rhs" : "$.bnplFlag",
                    "output" : "final",
                    "resultMapping" : {

                    },
                    "runtimeConfig" : {
                        "mergeCommonProperties" : true
                    }
                }
            ],
            "name" : "create-user-realm-identifier-info"
        }
    ],
    "responseDefinition" : {
        "responseMapping" : {
            "summary" : "$.set-bnpl[1].summary",
            "additional-details" : "$.set-bnpl[0].data.userRealmDetail",
            "more-details" : "$.set-bnpl[2].data"
        }
    },
    "active" : true,
    
    "realmId" : "dd180bca-465a-470a-abe4-9d5a15ded551",
    "nameVersion" : "set-bnpl_2",
    "tags" : [
        "ninjapay",
        "creditLimit"
    ],
    "name" : "set-bnpl",
    "_class" : "com.ninjacart.wf.infra.adapters.domains.configuration.entities.ServiceConfigEntity"
}