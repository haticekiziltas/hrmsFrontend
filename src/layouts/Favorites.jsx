import React from 'react'
import { NavLink } from 'react-router-dom'
import { Dropdown, Label } from 'semantic-ui-react'
import { useSelector } from 'react-redux'


export default function Favorites() {

    const { favoriteItem } = useSelector(state => state.favorite)
    return (
        <div>
            <Dropdown item text='Favoriler'>
                <Dropdown.Menu>
                    {
                        favoriteItem.map((favoriteItem) => (
                            <Dropdown.Item>
                                {favoriteItem.jobAdvertisement.description}
                                <Label>
                                    {favoriteItem.quantitiy}
                                </Label>
                            </Dropdown.Item>
                        ))
                    }


                    <Dropdown.Divider />
                    <Dropdown.Item as={NavLink} to="/favorites">Favorilere Ekle</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )}