import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignOut({ signIn }) {
    const buttonStyle = {
        width: 120,
        height: 45,
        color: " #008080",
        borderColor: " #008080",
        marginRight: 20,
        borderRadius: 10,



    }
    const buttonStyle2 = {
        width: 120,
        height: 45,
        backgroundColor: " #008080",
        borderColor: " #008080",
        color: " white",
        marginRight: 200,
        borderRadius: 10


    }
    return (
        <div>
            <Menu.Item>
                <Button basic style={buttonStyle}>Kayıt Ol</Button>
                <Button  style={buttonStyle2} onClick={signIn}>Giriş Yap</Button>

            </Menu.Item>
        </div>
    )
}
