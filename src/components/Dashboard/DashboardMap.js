import React from "react";
import styled from "styled-components";
import Card from "../Cards/Card";
import MapPolygons from "../Leaflet/MapPolygons";

const DashboardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const ChartTitle = styled.div`
  font-weight: 600;
  padding-bottom: 7px;
`
function DashboardBody ({map_data}) {
  return (
    <DashboardContainer>
      <Card>
        <ChartTitle>
          World Wide Reports
        </ChartTitle>
        <div>
          <MapPolygons map_data={map_data} />
        </div>
      </Card>
    </DashboardContainer>
  )
}

export default DashboardBody;