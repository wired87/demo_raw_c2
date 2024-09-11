
//import * as brainflow from 'brainflow';
/*
// Hold a reference to the Django WebSocket connection
let djangoSocket: WebSocket | null = null;

// Create WebSocket server for Next.js API
const wss = new WebSocketServer({ noServer: true });

const ipProtocolTypes = brainflow.IpProtocolTypes.NO_IP_PROTOCOL;
const selectedBoard = brainflow.BoardIds.SYNTHETIC_BOARD;

const syntheticParams: brainflow.IBrainFlowInputParams = {
  serialPort: "",
  macAddress: "",
  ipAddress: "",
  ipAddressAux: "",
  ipAddressAnc: "",
  ipPort: 0,
  ipPortAux: 0,
  ipPortAnc: 0,
  ipProtocol: ipProtocolTypes,
  otherInfo: "",
  timeout: 0,
  serialNumber: "",
  file: "",
  fileAux: "",
  fileAnc: "",
  masterBoard: selectedBoard,
};

// Helper function to establish the Django WebSocket connection
const createDjangoConnection = () => {
  if (!djangoSocket || djangoSocket.readyState !== WebSocket.OPEN) {
    djangoSocket = new WebSocket('ws://localhost:8000/ws/some_endpoint/');

    djangoSocket.onopen = () => {
      console.log('Connected to Django backend');
    };

    djangoSocket.onclose = () => {
      console.log('Disconnected from Django backend');
      djangoSocket = null;
    };

    djangoSocket.onerror = (error) => {
      console.error('Error in Django WebSocket:', error);
    };
  }
};

const generateAndProcessEEGData = () => {
  const boardShim = new brainflow.BoardShim(selectedBoard, syntheticParams);
  boardShim.prepareSession();
  boardShim.startStream();

  setInterval(() => {
    const data = boardShim.getBoardData();

    // Perform filtering on the data
    const samplingRate = brainflow.BoardShim.getSamplingRate(selectedBoard);

    const filteredData = brainflow.DataFilter.performBandPass(// @ts-ignore
      data, samplingRate, 5.0, 50.0, 4, brainflow.FilterTypes.BESSEL, 0
    );

    // If Django WebSocket is open, send the filtered data
    if (djangoSocket && djangoSocket.readyState === WebSocket.OPEN) {
      djangoSocket.send(JSON.stringify({ eegData: filteredData }));
    }

    return filteredData;
  }, 0);

  boardShim.stopStream();
  boardShim.releaseSession();
};

export default function handler(req: NextApiRequest, res: any) {
  console.log("Handler triggered")
  if (res.socket.server.ws) {
    res.end();
    return;
  }

  wss.on('connection', (ws) => {
    console.log('Client connected for EEG streaming');

    createDjangoConnection();

    setInterval(() => {
      const filteredData = generateAndProcessEEGData();
      ws.send(JSON.stringify(filteredData));
    }, 1000); // Send data to client every second

    ws.on('close', () => {
      console.log('Client disconnected');
    });
  });
  // @ts-ignore
  res.socket.server.on('upgrade', (req, socket, head) => {
    wss.handleUpgrade(req, socket, head, (ws) => {
      wss.emit('connection', ws, req);
    });
  });

  res.socket.server.ws = wss;
  res.end();
}
*/
