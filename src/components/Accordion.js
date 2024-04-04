import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import '../App.css';

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),
  );

  return (
    <button
      type="button"
      style={{ backgroundColor: 'none' }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

function SearchBtn() {
  return (
    <Accordion defaultActiveKey="0">

      <Card>
        <Card.Header>
          <CustomToggle eventKey="1">
            <img src={process.env.PUBLIC_URL + '/search.png'} 
                  width="25px"/>
          </CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <InputGroup className="mb-3">
            <Form.Control
            placeholder="검색어를 입력하세요."
          />
            {/* <Button variant="outline-secondary" id="button-addon2">
              취소
            </Button> */}
          </InputGroup>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}


export default SearchBtn;

// render(<Example />);