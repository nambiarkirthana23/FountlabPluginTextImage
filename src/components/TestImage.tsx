import { PanelProps } from '@grafana/data';
import { css, cx } from '@emotion/css';
import { useStyles2 } from '@grafana/ui';
import { getStyles } from 'style';
import { PanelDataErrorView } from '@grafana/runtime';

import { TestIds } from 'img/constants';
import { PanelOptions } from 'type';
import React = require('react');

interface Props extends PanelProps<PanelOptions> {}

export const ImagePanel: React.FC<Props> = ({ options, data, width, height, fieldConfig, id }) => {
  const styles = useStyles2(getStyles);

  // Function to handle the click event
  const handleNavigation = () => {
    // Replace 'dashboardURL' with the actual URL of the dashboard
    const dashboardURL = options.dash ? options.dash : 'http://localhost:3000/d/fdy9gk9bea7swe/testing2?orgId=1&from=1726642681012&to=1726664281012';
    
    // Navigate to the dashboard URL in the current tab
    window.location.assign(dashboardURL);
  };

  if (data.series.length === 0) {
    return <PanelDataErrorView fieldConfig={fieldConfig} panelId={id} data={data} needsStringField />;
  }

  return (
    <div
      data-testid={TestIds.panel.root}
      className={cx(
        styles.wrapper,
        css`
          width: ${width}px;
          height: ${height}px;
        `
      )}
    >
      <h1 className={styles.h1}>{options.text}</h1>
      
      {/* Image with an onClick event for navigation */}
      <img
        className={styles.img}
        width={width - 10}
        height={height - 10}
        src={options.url}
        onClick={handleNavigation}  // Trigger navigation to new dashboard page
        style={{ cursor: 'pointer' }} // Show a pointer cursor to indicate clickability
      />
    </div>

  );
};
