import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import "./Loading.scss";
import ContentLoader from "react-content-loader";

export default function Loading(props) {
  const isLoading = useSelector((state) => state.LoadingReducer.loading);
  const renderLoading = () => {
    if (isLoading) {
      return (
        <ContentLoader
          viewBox="0 0 860 207"
          height="100%"
          width="100%"
          {...props}
        >
          <rect x="0" y="0" rx="0" ry="0" width="200" height="120" />
          <rect x="0" y="129" rx="0" ry="0" width="200" height="15" />
          <rect x="0" y="161" rx="0" ry="0" width="140" height="15" />
          <rect x="213" y="0" rx="0" ry="0" width="200" height="120" />
          <rect x="213" y="129" rx="0" ry="0" width="200" height="15" />
          <rect x="213" y="161" rx="0" ry="0" width="140" height="15" />
          <rect x="425" y="0" rx="0" ry="0" width="200" height="120" />
          <rect x="425" y="129" rx="0" ry="0" width="200" height="15" />
          <rect x="425" y="161" rx="0" ry="0" width="140" height="15" />
          <rect x="637" y="0" rx="0" ry="0" width="200" height="120" />
          <rect x="637" y="129" rx="0" ry="0" width="200" height="15" />
          <rect x="637" y="161" rx="0" ry="0" width="140" height="15" />
        </ContentLoader>
      );
    }
    return "";
  };
  return <div>{renderLoading()}</div>;
}
