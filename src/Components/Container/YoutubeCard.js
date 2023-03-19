import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard({
  open,
  title,
  views,
  timeStamp,
  channelImage,
  channel,
  thumbnail,
}) {
  return (
    <Card
      sx={{
        // minWidth: 300,
        minWidth: open ? 300 : 335,
        maxHeight: 285,
        minHeight: 285,
        borderRadius: 2,
        margin: 1,
      }}
      elevation={1}
    >
      <CardActionArea>
        <CardMedia component="img" height="200" image={thumbnail} />
        <CardContent sx={{ display: "flex" }}>
          <Avatar alt="Remy Sharp" src={channelImage} />
          <div
            style={{
              marginLeft: 13,
            }}
          >
            <div style={{ fontWeight: "bold", fontSize: "14px" }}>{title}</div>
            <div style={{ fontSize: "12px", marginTop: "3px" }}>{channel}</div>
            <div
              style={{
                fontSize: "12px",
                display: "flex",
                alignItems: "center",
              }}
            >
              {views}
              <div
                style={{
                  marginLeft: "5px",
                  marginRight: "5px",
                  fontSize: "20px",
                }}
              >
                ·
              </div>
              {timeStamp}
            </div>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
