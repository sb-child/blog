import { motion } from 'framer-motion';
import React from 'react';
import { useLocation } from 'umi';

function Wrapper(props: {
  children?: React.ReactNode;
  className?: string;
  _key?: string;
}) {
  return (
    <motion.div
      key={props._key ? props._key + '__motion' : undefined}
      layout
      initial={{ opacity: 0.0, x: 50 }}
      animate={{ opacity: 1.0, x: 0 }}
      exit={{ opacity: 0.0, x: -50 }}
      className={props.className}
    >
      {props.children}
    </motion.div>
  );
}

export default function Anim(props: {
  children?: React.ReactNode;
  className?: string;
  _key?: string;
  k?: string;
}) {
  // const [isPresent, safeToRemove] = usePresence();
  // const isPresented = useIsPresent();
  const loc = useLocation();
  const [k, setK] = React.useState<string>('');
  React.useEffect(() => {
    setK(loc.pathname + props._key);
  }, [loc, props._key]);
  const kk = props.k ? props.k : props._key ? k : undefined;
  // React.useEffect(() => {
  //   !isPresent && setTimeout(safeToRemove, 100);
  // }, [isPresent]);
  // React.useEffect(() => {
  //   console.log(k, isPresented);
  // }, [isPresented]);

  return (
    <Wrapper key={kk + '__wrapper'} _key={kk}>
      <div key={kk + '__child'}>{props.children}</div>
      {/* {isPresented && } */}
    </Wrapper>
  );
}
