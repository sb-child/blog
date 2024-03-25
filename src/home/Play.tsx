import imgSoftRuler from '@/assets/images/tools/soft-ruler.jpg';
import { ToolOutlined } from '@ant-design/icons';
import { Button, Card, Col, Divider, Row, Typography } from 'antd';
import x from '@/assets/play/1.txt';
import { useNavigate } from 'umi';
import Anim from '@/components/animated';

export default function PlayContent(props: {}) {
  const nav = useNavigate();
  
  return (
    <Anim k="root-play">
    
    </Anim>
  );
}
