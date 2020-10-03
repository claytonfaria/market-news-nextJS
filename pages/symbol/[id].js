import Head from 'next/head';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useRouter } from 'next/router';

import Layout, { siteTitle } from '../../components/layout';
import {
  SymbolOverview,
  CompanyProfile,
  FundamentalData,
  AdvancedChart,
} from '../../components/tradingViewWidgets';

const SymbolDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {id && (
        <>
          <SymbolOverview ticker={id} />
          <Tabs defaultActiveKey="profile">
            <Tab eventKey="profile" title="Profile">
              <Row className="pb-4" noGutters>
                <Col lg={6}>
                  <CompanyProfile ticker={id} />
                </Col>
                <Col lg={6}>
                  <FundamentalData ticker={id} />
                </Col>
              </Row>
            </Tab>
            <Tab className="pb-4" eventKey="chart" title="Advanced Chart">
              <AdvancedChart ticker={id} />
            </Tab>
          </Tabs>
        </>
      )}
    </Layout>
  );
};

export default SymbolDetails;
