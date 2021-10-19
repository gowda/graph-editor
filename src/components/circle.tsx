import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const clear = (node: any) => d3.select(node).selectAll('*').remove();

const drawCircle = (node: any, radius: number, cx: number, cy: number) =>
  d3
    .select(node)
    .append('circle')
    .style('stroke', 'red')
    .style('fill', 'red')
    .attr('r', radius)
    .attr('cx', cx)
    .attr('cy', cy);

interface Props {
  radius: number;
}

export default ({ radius }: Props) => {
  const svgRef = useRef(null);

  useEffect(() => {
    if (svgRef.current) {
      clear(svgRef.current);
      drawCircle(svgRef.current, radius, 200, 200);
    }
  }, [svgRef, radius]);

  return (
    <svg
      ref={svgRef}
      width='400px'
      height='400px'
      style={{ backgroundColor: 'yellow', border: '1px solid red' }}
    />
  );
};
