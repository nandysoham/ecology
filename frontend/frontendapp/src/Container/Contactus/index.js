import React from 'react'
import Layout from '../../Components/Layout'
import ContactMaps from '../../Components/ContactMaps'
import { Container, Card, CardGroup, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function Contactus() {
    return (
        <div>
            <Layout>
                <div style={{
                    backgroundImage: "url(/img/aboutusbg.jpg)",
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '100%',
                    minHeight: '100vh'
                }}>


                    <div className="container mapabove">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas in architecto nihil iure, labore cumque perspiciatis maxime consectetur aliquam. Provident ipsam animi illo porro soluta amet eos dolores labore quae quod autem hic pariatur consequuntur eum, asperiores modi sit, vero eligendi nesciunt reiciendis? Mollitia numquam ad quaerat, laudantium recusandae quo officia velit unde perferendis praesentium dolorum facere quidem ut optio omnis nostrum esse totam explicabo. Eaque animi eligendi neque sed voluptatem ducimus porro quod excepturi libero minus officia quasi laboriosam maxime, nisi ab quos ipsum minima explicabo nulla, labore earum nostrum. Provident dolor inventore, illo recusandae minima magnam? Modi, at!
                </div>

                    <div className="container mapcontain">
                        <ContactMaps>

                        </ContactMaps>

                    </div>
                </div>

            </Layout>
        </div>
    )
}