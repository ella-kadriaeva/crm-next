import AddCompanyButton from './components/addCompanyButton';
import StatusLabel, { Status } from './components/statusLabel';
import MagicButton from './components/MagicErrorButton';
export default function Home() {
  return (
    <main>
      <h1 className="text-sm">Home</h1>
      <AddCompanyButton />
      <MagicButton />
      {/* <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive}>Not Active</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended}>Suspended</StatusLabel> */}
    </main>
  );
}
