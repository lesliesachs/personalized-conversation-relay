const toolManifest = {
    "tools": [
        {
            "type": "function",
            "function": {
                "name": "get-customer",
                "description": "Retrieves customer details based on the call 'from' information",
                "parameters": {
                    "type": "object",
                    "properties": {
                        "from": {
                            "type": "string",
                            "description": "The phone number of the customer (caller)"
                        }
                    },
                    "required": [
                        "from"
                    ]
                }
            }
        },
        {
            "type": "function",
            "function": {
                "name": "update-customer-profile",
                "description": "Updates the segment customer profile with new traits",
                "parameters": {
                    "type": "object",
                    "properties": {
                        "userId": {
                            "type": "string",
                            "description": "The userId of the customer"
                        },
                        "home_price": {
                            "type": "string",
                            "description": "The price of the home"
                        },
                        "home_type": {
                            "type": "string",
                            "description": "The type of home of the customer is looking to buy"
                        },
                        "home_use": {
                            "type": "string",
                            "description": "The intended use of the home - rental, primary_residence or vacation home"
                        },
                        "situation_goals": {
                            "type": "string",
                            "description": "An explanation of the customer's situation and what they are trying to achieve."
                        }
                    },
                    "required": [
                        "userId"
                    ]
                }
            }
        },
        {
            "type": "function",
            "function": {
                "name": "live-agent-handoff",
                "description": "Hands the call to a live agent",
                "parameters": {
                    "type": "object",
                    "properties": {
                        "callSid": {
                            "type": "string",
                            "description": "The unique identifier of the call to be transferred"
                        }
                    },
                    "required": [
                        "callSid"
                    ]
                }
            }
        },
        {
            "type": "function",
            "function": {
                "name": "send-otp",
                "description": "sends an SMS verification code to the specified phone number",
                "parameters": {
                    "type": "object",
                    "properties": {
                        "phone": {
                            "type": "string",
                            "description": "the caller's phone number"
                        }
                    },
                    "required": [
                        "phone"
                    ]
                }
            }
        },
        {
            "type": "function",
            "function": {
                "name": "verify-otp",
                "description": "confirms the code sent to a phone number",
                "parameters": {
                    "type": "object",
                    "properties": {
                        "phone": {
                            "type": "string",
                            "description": "the caller's phone number"
                        },
                        "passcode": {
                            "type": "string",
                            "description": "the passcode provided by the user"
                        }
                    },
                    "required": [
                        "passcode"
                    ]
                }
            }
        }
    ]
}

module.exports = { toolManifest };
