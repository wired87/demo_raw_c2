
/*
// Using dynamic import for Plotly to avoid SSR issues
const Plotly = dynamic(() => import('react-plotly.js'), { ssr: false });

const SignalComponent = ({ file }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const fileContent = event.target.result;

        if (file.type === 'text/csv') {
          // Parse CSV
          Papa.parse(fileContent, {
            complete: (results) => {
              const timeSeries = results.data.map(row => ({
                x: row[0], // Assuming time data is in the first column
                y: row[1], // Assuming EEG data is in the second column
                type: 'scatter',
                mode: 'lines',
                name: 'EEG Signal'
              }));
              setData(timeSeries);
            }
          });
        } else if (file.type === 'application/edf') {
          // Parse EDF
          parseEdf(fileContent, (err, edfData) => {
            if (!err) {
              const signals = edfData.signals.map((signal, index) => ({
                x: Array.from(Array(signal.samples.length).keys()), // Example x-axis as sample indices
                y: signal.samples,
                type: 'scatter',
                mode: 'lines',
                name: `Signal ${index}`
              }));
              setData(signals);
            }
          });
        }
      };

      reader.readAsArrayBuffer(file); // For EDF
      // reader.readAsText(file); // For CSV
    }
  }, [file]);


  return (
    <div>
      <Plotly
        data={data}
        layout={{
          title: 'EEG Signal Visualization',
          xaxis: { title: 'Time' },
          yaxis: { title: 'Amplitude' }
        }}
      />
    </div>
  );
};

export default SignalComponent;

 */

