import http from 'k6/http';
import { check } from 'k6';

export let options = {
    vus: 10,
    duration: '6s',
  };

export default function() {
  var url = 'https://6151ﬀ8e4a5f22001701d590.mockapi.io/transactions';

  var params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  let response = http.get(url, params);

  check(response, {
    'is status 200': r => r.status === 200,
  });
}