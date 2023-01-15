import './SideBar.css';
import ListGroup from 'react-bootstrap/ListGroup';
function SideBarLeft() {
  return (
    <div className="SideBar">
    <ListGroup>
      <ListGroup.Item action href='/Home' >Home</ListGroup.Item>
      <ListGroup.Item action href='/InvitedSpeakers'> Invited Speakers</ListGroup.Item>
      <ListGroup.Item action href='/ImportantDates'> Important Dates</ListGroup.Item>
      <ListGroup.Item action href='/BookOfAbstract'>Book Of Abstract</ListGroup.Item>
      <ListGroup.Item action href='/AbstractSubmission'>Abstract Submission</ListGroup.Item>
      <ListGroup.Item action href='/FirstCircular'>First Circular</ListGroup.Item>
      <ListGroup.Item action href='/SecondCircular'>Second Circular</ListGroup.Item>
      <ListGroup.Item action href='/ThirdCircular'>Third Circular</ListGroup.Item>
      <ListGroup.Item action href='/ScientificComite'>Scientific Comite</ListGroup.Item>
      <ListGroup.Item action href='/OrganizingComite'>Organizing Comite</ListGroup.Item>
      <ListGroup.Item action href='/Sponsors'>Sponsors</ListGroup.Item>
      <ListGroup.Item action href='/ProgramICSA2023'> Program ICSA2023</ListGroup.Item>
      <ListGroup.Item action href='/ParticipationFees'>Partcipation Fees</ListGroup.Item>
    </ListGroup>
    </div>
  );
}
export default SideBarLeft;



