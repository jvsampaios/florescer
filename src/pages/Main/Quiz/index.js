import React, { useState } from 'react'
import {
    Layout,
    Typography,
    Image,
    Row,
    Col,
    Button,
} from 'antd';
import './styles.css'
import { ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";
import personagemFrame1 from "../../../assets/imagem-personagem1.png";
import personagemFrame2 from "../../../assets/imagem-personagem2.png";

const { Title, Text } = Typography;
const { Content } = Layout;
const steps = [
    {
        title: 'First',
        content: <Row className='container_step'>
            <Row className='container_item'>
                <Col>
                    <Image
                        src={personagemFrame1}
                        preview={false}
                        style={{
                            width: '20rem',
                            marginBottom: '1rem'
                        }}
                    />
                </Col>
            </Row>
            <Row className='container_step'>
                <Col>
                    <Text>Olá, eu sou a especialista Flora.</Text>
                </Col>
            </Row>
            <Row className='container_step' style={{ padding: '0 15px', textAlign: 'justify' }}>
                <Col>
                    <Text>Sei que existem inúmeras espécies de plantas disponíveis para cultivo e por isso pode ser complicado saber quais são as mais apropriadas para o seu perfil.</Text>
                </Col>
            </Row>

        </Row>,
    },
    {
        title: 'Second',
        content: <Row className='container_step'>
            <Row className='container_item'>
                <Col>
                    <Image
                        src={personagemFrame2}
                        preview={false}
                        style={{
                            width: '20rem',
                            marginBottom: '1rem'
                        }}
                    />
                </Col>
            </Row>
            <Row className='container_step' style={{ padding: '0 15px', textAlign: 'justify' }}>
                <Col>
                    <Text>E para te ajudar, desenvolvi esse quiz que te apresenta as plantinhas perfeitas para você, independente da sua realidade. Curioso para conhecê-las?</Text>
                </Col>
            </Row>

        </Row>,
    },
];

const Quiz = () => {
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };
    return (
        <Layout className="layout">
            <Row className='container_step' style={{ justifyContent: 'flex-start' }}>
                <Col>
                    <Button type='link' style={{ color: '#6D7970' }} onClick={() => prev()}>
                        <ArrowLeftOutlined style={{ fontSize: '26px' }} />
                    </Button>
                </Col>
            </Row>
            <Title className='titulo'>Quiz</Title>
            <Content className="site-layout-content">
                {steps[current].content}
                <div>

                    {current < steps.length - 1 && (
                        <Row className='container_step' style={{ justifyContent: 'end' }}>
                            <Col>
                                <Button type='link' style={{ color: '#6D7970', fontSize:'1rem' }} onClick={() => next()}>
                                    Avançar
                                    <ArrowRightOutlined />
                                </Button>

                            </Col>
                        </Row>
                    )}
                    {current === steps.length - 1 && (
                        <Row className='container_step' style={{ justifyContent: 'center' }}>
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


export default Quiz;

