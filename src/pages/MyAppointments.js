import AppointmentsCarousel from '../components/AppointmentsCarousel';
import AppointmentsNumber from '../components/AppointmentsNumber';

const MyAppointments = () => (
  <div className="singleOuter">
    <div className="singleInner">
      <AppointmentsCarousel />
      <AppointmentsNumber />
    </div>
  </div>
);

export default MyAppointments;
