/*global Cipher*/
'use strict';

Cipher.createGraphQLQuery({
    name: 'person',
    params: [
        {
            name: 'param1',
            value:'value1'
        }
    ],
    fields: [
        {
            name: 'head'
        },
        {
            name: 'heart'
        },
        {
            name: 'hand',
            values: [
                {
                    name: 'thumb'
                },
                {
                    name: 'index',
                    values: [
                        {
                            name: 'nail'
                        }
                    ]
                }
            ]
        }
    ]
});
