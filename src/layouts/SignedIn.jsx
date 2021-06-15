import React from 'react'
import { Dropdown, Menu, Image} from 'semantic-ui-react'

export default function SignIn({signOut}) {
    
    return (
        <div>
        <Menu.Item>
            <Image avatar spaced ="right" src= "https://avatars.githubusercontent.com/u/81980876?v=4"/>
            <Dropdown pointig= "top left" text= "Hatice Kızıltaş">
                <Dropdown.Menu>
            <Dropdown.Item text = "bilgilerim" icon="info"/>
            <Dropdown.Item onClick={signOut} text = "çıkış yap" icon="sign-out"/>
            </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    </div>
    )
}
