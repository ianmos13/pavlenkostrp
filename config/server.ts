export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('LN1eqCoIjdECDKivyn356g==,r3dRuMR2vN90UwNBqcRUVA==,dareb9QJT1g8S0aX8QrQxA==,gRclr2A4MqGuXe/SeqVnYA=='),
  },
});
