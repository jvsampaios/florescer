import React, { useState } from 'react'
import {
    Layout,
    Typography,
    Input,
    Row,
    Col,
    Button,
    Image,
    Card
} from 'antd';
import { useHistory } from 'react-router-dom';
import './styles.css'
import { ArrowRightOutlined, ArrowLeftOutlined, SearchOutlined } from '@ant-design/icons';
import cactus from "../../../assets/cacto.png";
import cardVerde from "../../../assets/crad-medio-verde.png";
import minhasPlantasIcon from "../../../assets/minhas-plantas-icon.svg";
import "antd/dist/antd.css";

const { Title, Text } = Typography;
const { Content } = Layout;

const Catalogo = () => {
    const [current, setCurrent] = useState(0);
    const next = () => {
        setCurrent(current + 1);
    };
    const history = useHistory();

    const steps = [
        {
            title: 'First',
            content:

                <Row className='container_step'>
                     <Row className='container_item' style={{ margin: 0, justifyContent: 'start' }}>
                        <Col>
                            <Title level={2} className='titulo-categoria' style={{ textAlign: "left"}}>Fácil Cuidado</Title>
                        </Col>
                    </Row>
                    <Row className='container_item' style={{ alignContent: 'center' }}>
                        <Col>
                            <Card className="card-catalogo-style" bordered={false} style={{ backgroundImage: `url(${cardVerde})`, color: "FFFFFF", margin: '10px 0px 0px 0' }}>

                                <Image
                                    src={minhasPlantasIcon}
                                    preview={false}
                                    className='icon-catalogo'
                                />
                                <Image
                                    src={cactus}
                                    preview={false}
                                    className='img-catalogo'
                                />
                            </Card>
                            <Card className="card-catalogo-style" bordered={false} style={{ backgroundImage: `url(${cardVerde})`, color: "FFFFFF", margin: '10px 0px 0px 0' }}>
                                <Image
                                    src={minhasPlantasIcon}
                                    preview={false}
                                    className='icon-catalogo'
                                />
                                <Image
                                    src={cactus}
                                    preview={false}
                                    className='img-catalogo'
                                />
                            </Card>
                        </Col>
                    </Row>
                    <Row className='container_item' style={{ margin: '0' }}>
                        <Col>
                            <Card className="card-categoria" >
                                <Text style={{ color: '#6D7970' }}>Cacto juliette</Text>
                            </Card>

                            <Card className="card-categoria">
                                <Text style={{ color: '#6D7970' }}>Cacto juliette</Text>
                            </Card>
                        </Col>
                    </Row>
                </Row>,
        },
        {
            title: 'Second',
            content:
                <Row className='container_step'>
                    <Row className='container_step' style={{ padding: '0 15px', textAlign: 'justify' }}>
                        <Col>
                            <Text>E para te ajudar, desenvolvi esse quiz que te apresenta as plantinhas perfeitas para você, independente da sua realidade. Curioso para conhecê-las?</Text>
                        </Col>
                    </Row>

                </Row>
            ,
        },
    ];

    return (
        <Layout className="layout" >
            <Row className='container_step' style={{ justifyContent: 'flex-start' }}>
                <Col>
                    <Button type='link' style={{ color: '#6D7970' }} onClick={history.goBack}>
                        <ArrowLeftOutlined style={{ fontSize: '26px', padding: 0 }} />
                    </Button>
                </Col>
            </Row>
            <Title className='titulo'>Catálogo</Title>
            <Content className="site-layout-content" style={{ display: 'block', padding: 0 }} >
                <Row className='container_item'>
                    <Col>
                        <Input
                            placeholder="Pesquisar"
                            style={{
                                width: '85vw',
                                background: 'none',
                            }}
                            suffix={<SearchOutlined />}
                            size="large"
                        />
                    </Col>
                </Row>
                {steps[current].content}
                <div>

                    {current < steps.length - 1 && (
                        <Row className='container_step' style={{ alignContent: 'end' }}>
                            <Col>
                                <Button type='link' style={{ color: '#6D7970', fontSize: '1rem' }} onClick={() => next()}>
                                    Avançar
                                    <ArrowRightOutlined />
                                </Button>

                            </Col>
                        </Row>
                    )}
                    {current === steps.length - 1 && (
                        <Row className='container_step' style={{ alignContent: 'center' }}>
                            <Col>
                                <Button
                                    type="primary"
                                    style={{
                                        background: '#EA7E84',
                                        border: 'none',
                                        borderRadius: '16px',
                                        width: '13rem',
                                        height: '3rem',
                                        boxShadow: '1px 3px 3px 1px #EA7E84',
                                        fontSize: '1.2rem',
                                    }}
                                >
                                    Começar Quiz
                                </Button>
                            </Col>
                        </Row>
                    )}
                </div>
            </Content>


        </Layout >
    );
};


export default Catalogo;

