export function simulateVehicles(stream) {
  const base = [
    { lat: -6.78, lng: 39.20 }, // Ubungo
    { lat: -6.82, lng: 39.27 }, // Kariakoo
    { lat: -6.80, lng: 39.25 }  // Posta
  ];

  return stream.zones
    ? Object.keys(stream.zones).map((z, i) => ({
        id: z,
        lat: base[i].lat + Math.random() * 0.01,
        lng: base[i].lng + Math.random() * 0.01,
        intensity: stream.zones[z]
      }))
    : [];
}