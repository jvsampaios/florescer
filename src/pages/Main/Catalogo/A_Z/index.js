import React from 'react'
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
import { useHistory, Link } from 'react-router-dom';
import './styles.css'
import { ArrowLeftOutlined, SearchOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";
import MenuComponent from '../../../../components/MenuComponent';
import amorperfeito from "../../../../assets/amor_perfeito.png";
import cactus from "../../../../assets/cactus.png";
import carnivora from "../../../../assets/carnivora.png";
import espadadesao from "../../../../assets/espadadesao.png";

const { Title, Text } = Typography;
const { Content } = Layout;

const Catalogo = () => {
    const history = useHistory();
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
            <Row className='container_item' style={{ margin: 0, justifyContent: 'start' }}>
                        <Col>
                            <Title level={2} className='titulo-categoria' style={{ textAlign: "left" }}>A - Z</Title>
                        </Col>
                    </Row>

                <Row className='container_item'>
                    <Link to ='/placeholder'>
                    <Col>
                    <img src={amorperfeito} className="card-catalogo-style"/>

                    </Col>
                    </Link>

                    <Col>
                    <img src={cactus} className="card-catalogo-style"/>

                    </Col>
                </Row>
                <Row className='container_item' style={{ margin: '0' }}>
                        <Col>
                        <Link to ='/placeholder'>
                            <Card className="card-categoria" >
                                <Text style={{ color: '#6D7970' }}>Amor-perfeito</Text>
                            </Card>
                            </Link>
                            </Col>
                            <Col>
                            <Card className="card-categoria">
                                <Text style={{ color: '#6D7970'}}>Cactus</Text>
                            </Card>
                        </Col>
                    </Row>

               


                <Row className='container_step'>
                    <Row className='container_item' style={{ alignContent: 'center' }}>
                        <Col>
                        <img src={carnivora} className="card-catalogo-style"/>
  
                        </Col>

                        <Col>
                    <img src={espadadesao} className="card-catalogo-style"/>

                    </Col>
                    </Row>
                   
                </Row>
                <MenuComponent/>
            </Content>


        </Layout >
    );
};


export default Catalogo;

