import React, { useEffect, useRef, useState } from 'react';
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
  const [width, setWidth] = useState<number>(400);
  const [height, setHeight] = useState<number>(400);
  const [cx, setCx] = useState<number>(200);
  const [cy, setCy] = useState<number>(200);
  const svgRef = useRef<SVGSVGElement>(null);
  const [selected, setSelected] = useState<boolean>(false);

  useEffect(() => {
    if (svgRef.current) {
      clear(svgRef.current);
      drawCircle(svgRef.current, radius, cx, cy)
        .on('mousedown', () => {
          setSelected(true);
        })
        .on('mouseup', () => {
          setSelected(false);
        });
    }
  }, [svgRef, radius, cx, cy]);

  useEffect(() => {
    if (svgRef.current && selected) {
      d3.select(svgRef.current).on('mousemove', (event) => {
        const [x, y] = d3.pointer(event);
        setCx(x);
        setCy(y);
      });
    } else {
      d3.select(svgRef.current).on('mousemove', null);
    }
  }, [svgRef, selected]);

  useEffect(() => {
    if (svgRef.current) {
      setWidth(svgRef.current!.clientWidth);
    }
  }, [svgRef]);

  useEffect(() => {
    const vh = Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0
    );

    setHeight(vh - (36 + 25 * 2 + 38 + 25 * 2));
  });

  useEffect(() => {
    setCx(width / 2);
  }, [width]);

  useEffect(() => {
    setCy(height / 2);
  }, [height]);

  return (
    <svg
      ref={svgRef}
      width='100%'
      height={`${height}px`}
      style={{
        backgroundColor: 'yellow',
        border: '1px solid red',
      }}
    />
  );
};
