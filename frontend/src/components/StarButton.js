export default function StarButton({ active }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28.74"
      height="27.938"
      viewBox="0 0 28.74 27.938"
    >
      <title>Bookmark {active ? 'entfernen' : 'setzen'}</title>
      <g transform="translate(-2.13 -2.472)" opacity={active ? '0.9' : '0.6'}>
        <path
          d="M24.116,29.91a1.489,1.489,0,0,1-.692-.173l-5.773-3a2.5,2.5,0,0,0-2.3,0l-5.773,3a1.489,1.489,0,0,1-.692.173,1.532,1.532,0,0,1-1.146-.535,1.469,1.469,0,0,1-.336-1.2l1.029-6.634a2.511,2.511,0,0,0-.685-2.133L3.061,14.631A1.5,1.5,0,0,1,3.892,12.1l6.478-1.048A2.506,2.506,0,0,0,12.208,9.7l2.95-5.9a1.5,1.5,0,0,1,2.683,0l2.95,5.9a2.506,2.506,0,0,0,1.837,1.35L29.108,12.1a1.5,1.5,0,0,1,.832,2.531l-4.685,4.778a2.511,2.511,0,0,0-.685,2.133L25.6,28.176a1.469,1.469,0,0,1-.336,1.2A1.532,1.532,0,0,1,24.116,29.91Z"
          fill={active ? '#edc003' : '#fcfcfc'}
        />
        <path
          d="M16.5,3.472a.982.982,0,0,0-.894.553l-2.95,5.9a3.007,3.007,0,0,1-2.2,1.62L3.972,12.594a1,1,0,0,0-.554,1.687L8.1,19.059a3.014,3.014,0,0,1,.822,2.56L7.9,28.253a.963.963,0,0,0,.221.8,1.026,1.026,0,0,0,.766.36.994.994,0,0,0,.461-.117l5.773-3a3,3,0,0,1,2.765,0l5.773,3a.994.994,0,0,0,.461.117,1.026,1.026,0,0,0,.766-.36.963.963,0,0,0,.221-.8l-1.029-6.634a3.014,3.014,0,0,1,.822-2.56l4.685-4.778a1,1,0,0,0-.554-1.687l-6.478-1.048a3.007,3.007,0,0,1-2.2-1.62l-2.95-5.9a.982.982,0,0,0-.894-.553m0-1a1.977,1.977,0,0,1,1.789,1.106l2.95,5.9a2,2,0,0,0,1.47,1.08l6.478,1.048A2,2,0,0,1,30.3,14.981l-4.685,4.778a2,2,0,0,0-.548,1.707L26.092,28.1a1.995,1.995,0,0,1-2.9,2.082l-5.773-3a2,2,0,0,0-1.843,0l-5.773,3a1.995,1.995,0,0,1-2.9-2.082l1.029-6.633a2,2,0,0,0-.548-1.707L2.7,14.981a2,2,0,0,1,1.109-3.374l6.478-1.048a2,2,0,0,0,1.47-1.08l2.95-5.9A1.977,1.977,0,0,1,16.5,2.472Z"
          fill="#fcfcfc"
        />
      </g>
    </svg>
  )
}
