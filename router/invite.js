module.exports={
inviteuser:{
    post:{
        tags:["Invite user"],
        summary:"Invite user with credentials",
        produces:["application/json"],
        consumes:["application/json"],
        requestBody:{
            required:true,
            content:{
                'application/json':{
                    schema:{
                        $ref:'#/components/schemas/inviteuser'
                    }
                }
            }
        },
        responses:{
            '201':{description:'User has invited successfully'},
            '500':{description:'Internal server error'}
        }
    }
}
}
