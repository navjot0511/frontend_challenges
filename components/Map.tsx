import { MapContainer, TileLayer, useMap, Marker } from 'react-leaflet'
import type { LatLngTuple } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { useEffect } from 'react'

interface Props {
  position?: LatLngTuple
}

const Map: React.FC<Props> = ({
  position = [51.505, -0.09]
}) => {
  return (
    <MapContainer 
      center={position} 
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker position={position} />
    </MapContainer>
  )
}


const LocationMarker = ({ position }: { position: LatLngTuple }) => {
  const map = useMap()

  useEffect(() => {
    map.flyTo(position, 13)
  }, [position, map])

  return (
    <Marker position={position}
      icon={L.icon({
        iconUrl: '/assets/challenges/ip-address-tracker-master/images/icon-location.svg'
      })}
    />
  )
}

export default Map
