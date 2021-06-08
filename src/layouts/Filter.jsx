import React, { useState } from 'react'
import { Accordion, Form, Menu,  Container, Segment } from 'semantic-ui-react'
import { Select } from 'evergreen-ui'
const ColorForm = (
    <Form>
        <Form.Group grouped>
            <Form.Checkbox label='Red' name='color' value='red' />
            <Form.Checkbox label='Orange' name='color' value='orange' />
            <Form.Checkbox label='Green' name='color' value='green' />
            <Form.Checkbox label='Blue' name='color' value='blue' />
        </Form.Group>
    </Form>
)

const SizeForm = (
    <Form>
        <Form.Group grouped>
            <Form.Radio label='Small' name='size' type='radio' value='small' />
            <Form.Radio label='Medium' name='size' type='radio' value='medium' />
            <Form.Radio label='Large' name='size' type='radio' value='large' />
            <Form.Radio label='X-Large' name='size' type='radio' value='x-large' />
        </Form.Group>
    </Form>
)



export default function Filter() {
    const [activeIndex, setActiveIndex] = useState(0)

    const handleClick = (e, titleProps) => {
        const { index } = titleProps

        const newIndex = activeIndex === index ? -1 : index

        setActiveIndex(newIndex)
    }
    return (



        <div>
            <Container>
                <Segment style={{ width: 240 }}>
                    <Select width={200}>
                        <option value="foo" selected>
                            Foo
</option>
                        <option value="bar">Bar</option>
                    </Select>

                    <Select width={200} style={{ marginTop: "20px" }}>
                        <option value="foo" selected>
                            Foo
</option>
                        <option value="bar">Bar</option>
                    </Select>
                </Segment>



            </Container>


            <Accordion style={{ alignSelf: "center", display: "flex", margin: "1rem 0" }} as={Menu} vertical>

                <Menu.Item  >
                    <Accordion.Title
                        active={activeIndex === 0}
                        content='Ülke/Şehir/İlçe'
                        index={0}
                        onClick={handleClick}
                    />
                    <Accordion.Content active={activeIndex === 0} content={SizeForm} />
                </Menu.Item>

                <Menu.Item>
                    <Accordion.Title
                        active={activeIndex === 1}
                        content='Tarih'
                        index={1}
                        onClick={handleClick}

                    />
                    <Accordion.Content active={activeIndex === 1} content={ColorForm} />
                </Menu.Item>
                <Menu.Item>
                    <Accordion.Title
                        active={activeIndex === 2}
                        content='Şirketin Sektörü'
                        index={2}
                        onClick={handleClick}

                    />
                    <Accordion.Content active={activeIndex === 2} content={ColorForm} />
                </Menu.Item>
                <Menu.Item floated="left">
                    <Accordion.Title
                        active={activeIndex === 3}
                        content='Pozisyon Seviyesi'
                        index={3}
                        onClick={handleClick}

                    />
                    <Accordion.Content active={activeIndex === 3} content={ColorForm} />
                </Menu.Item>
            </Accordion>



        </div>


    )
}