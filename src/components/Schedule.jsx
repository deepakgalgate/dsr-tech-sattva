import { SCHEDULE } from "../data/schedule";

function StatusBadge({ status }) {
  const cls =
    status === "Open"
      ? "badge badge-open"
      : status === "Filling fast"
      ? "badge badge-filling"
      : "badge badge-progress";
  return <span className={cls}>{status}</span>;
}

export default function Schedule() {
  return (
    <section className="section section-divider" id="schedule">
      <div className="container">
        <div className="section-head">
          <h2>Upcoming batches</h2>
          <p>Pick a schedule and mode that fits your week. Seats are confirmed on payment.</p>
        </div>

        <table className="schedule-table">
          <thead>
            <tr>
              <th scope="col">Batch</th>
              <th scope="col">Start date</th>
              <th scope="col">Timing</th>
              <th scope="col">Mode</th>
              <th scope="col">Status</th>
              <th scope="col">
                <span className="visually-hidden">Register</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {SCHEDULE.map((row) => (
              <tr key={row.batch}>
                <td data-label="Batch">{row.batch}</td>
                <td data-label="Start date">{row.start}</td>
                <td data-label="Timing">{row.timing}</td>
                <td data-label="Mode">{row.mode}</td>
                <td data-label="Status">
                  <StatusBadge status={row.status} />
                </td>
                <td data-label="Register" className="schedule-register-cell">
                  <a href="#register" className="table-link">
                    Register
                    <span className="visually-hidden"> for {row.batch}</span>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
