import React, { useEffect } from 'react'

const { kakao } = window

const MapContainer = ({ searchPlace }) => {
    useEffect(() => {
        
        var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 })
        const container = document.getElementById('myMap')
        const options = {
            center: new kakao.maps.LatLng(37.66418297732183, 126.75827257511878),
            level: 5,
        }
        const map = new kakao.maps.Map(container, options)

        const ps = new kakao.maps.services.Places()


        // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
        var mapTypeControl = new kakao.maps.MapTypeControl();

        // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
        // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
        map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

        // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
        var zoomControl = new kakao.maps.ZoomControl();
        map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);


        ps.keywordSearch(searchPlace, placesSearchCB)

        function placesSearchCB(data, status, pagination) {
            if (status === kakao.maps.services.Status.OK) {
                let bounds = new kakao.maps.LatLngBounds()

                for (let i = 0; i < data.length; i++) {
                    displayMarker(data[i])
                    bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x))
                }

                map.setBounds(bounds)
            }
        }

        function displayMarker(place) {
            let marker = new kakao.maps.Marker({
                map: map,
                position: new kakao.maps.LatLng(place.y, place.x),
                
            })

            // 마커에 클릭이벤트를 등록합니다
            kakao.maps.event.addListener(marker, 'click', function () {
                // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
                infowindow.setContent('<div style="padding:10px 10px 30px 10px;font-size:10px;">' + place.place_name + '<br/>' + place.road_address_name + '<br/>' + "전화번호:" + place.phone + '</div>',)
                infowindow.open(map, marker)
            })
        }

    }, [searchPlace])



    return (
        <div
            id="myMap"
            style={{
                width: '100%',
                height: '400px',
                marginTop: '10px',
            }}>
        </div>
    )
}



export default MapContainer