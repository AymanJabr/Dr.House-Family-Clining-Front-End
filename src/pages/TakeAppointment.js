import AvailableAppointments from '../components/AvailableAppointments';
import Calender from '../components/Calender';

const TakeAppointments = () => (
  <div className="singleOuter">
    <div className="singleInner">
      <h1>Take An Appointment</h1>
      <Calender />
      <AvailableAppointments />
    </div>
  </div>
);

export default TakeAppointments;
