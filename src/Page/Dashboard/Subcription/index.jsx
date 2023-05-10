import LineChart from "./LineChart";
import "./Subcription.css";
import Dashboard from "..";

function Subcription() {
  return (
    <div>
      <Dashboard />
      <LineChart />
      <div className='demo-card'>
        <div className='card-body1'>
          <div className='card-body-title1'>EARNINGS(MONTHLY)</div>
          <div className='card-body-detail1'>$40,000</div>
          <span className='card-body-icon'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='28'
              height='28'
              fill='currentColor'
              class='bi bi-calendar-fill'
              viewBox='0 0 16 16'
            >
              <path d='M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z' />
            </svg>
          </span>
        </div>
        <div className='card-body2'>
          <div className='card-body-title2'>EARNINGS(ANNUAL)</div>
          <div className='card-body-detail2'>$215,000</div>
          <span className='card-body-icon'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='28'
              height='28'
              fill='currentColor'
              class='bi bi-currency-dollar'
              viewBox='0 0 16 16'
            >
              <path d='M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z' />
            </svg>
          </span>
        </div>
        <div className='card-body3'>
          <div className='card-body-title3'>TASKS</div>
          <div className='card-body-detail3'>50%</div>
          <span className='card-body-icon'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='28'
              height='28'
              fill='currentColor'
              class='bi bi-clipboard2-data-fill'
              viewBox='0 0 16 16'
            >
              <path d='M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5Z' />
              <path d='M4.085 1H3.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1h-.585c.055.156.085.325.085.5V2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 2v-.5c0-.175.03-.344.085-.5ZM10 7a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7Zm-6 4a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1Zm4-3a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1Z' />
            </svg>
          </span>
        </div>
        <div className='card-body4'>
          <div className='card-body-title4'>PENDING REQUESTS</div>
          <div className='card-body-detail4'>18</div>
          <span className='card-body-icon'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='28'
              height='28'
              fill='currentColor'
              class='bi bi-wechat'
              viewBox='0 0 16 16'
            >
              <path d='M11.176 14.429c-2.665 0-4.826-1.8-4.826-4.018 0-2.22 2.159-4.02 4.824-4.02S16 8.191 16 10.411c0 1.21-.65 2.301-1.666 3.036a.324.324 0 0 0-.12.366l.218.81a.616.616 0 0 1 .029.117.166.166 0 0 1-.162.162.177.177 0 0 1-.092-.03l-1.057-.61a.519.519 0 0 0-.256-.074.509.509 0 0 0-.142.021 5.668 5.668 0 0 1-1.576.22ZM9.064 9.542a.647.647 0 1 0 .557-1 .645.645 0 0 0-.646.647.615.615 0 0 0 .09.353Zm3.232.001a.646.646 0 1 0 .546-1 .645.645 0 0 0-.644.644.627.627 0 0 0 .098.356Z' />
              <path d='M0 6.826c0 1.455.781 2.765 2.001 3.656a.385.385 0 0 1 .143.439l-.161.6-.1.373a.499.499 0 0 0-.032.14.192.192 0 0 0 .193.193c.039 0 .077-.01.111-.029l1.268-.733a.622.622 0 0 1 .308-.088c.058 0 .116.009.171.025a6.83 6.83 0 0 0 1.625.26 4.45 4.45 0 0 1-.177-1.251c0-2.936 2.785-5.02 5.824-5.02.05 0 .1 0 .15.002C10.587 3.429 8.392 2 5.796 2 2.596 2 0 4.16 0 6.826Zm4.632-1.555a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0Zm3.875 0a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0Z' />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Subcription;
