import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import { motion } from "framer-motion";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import {Row, Col, Container} from  'react-bootstrap';
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';



function FunctionOne() {
  const [isClicked, setIsClicked] = useState(false);

  const buttonStyle = {
    color: 'rgb(172, 169, 169)',
    top: '10px',
    transition: 'color 0.3s', 
  };

  const handleHeaderClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="heading-container">
    <h2 
      className="company-name"
      onClick={handleHeaderClick}
      style={{ textShadow: isClicked ? '0 0 10px rgba(255, 255, 255, 0.7)' : 'none' }}
    >
      ELENDIL
    </h2>
      <Stack spacing={5} direction="row" alignItems="center" justifyContent="center">
        <Button 
          variant="text"  
          style={buttonStyle}
          onMouseEnter={(e) => e.target.style.color = 'white'} 
          onMouseLeave={(e) => e.target.style.color = 'rgb(172, 169, 169)'} 
        >
          Products
        </Button>
        <Button 
          variant="text"  
          style={buttonStyle}
          onMouseEnter={(e) => e.target.style.color = 'white'} 
          onMouseLeave={(e) => e.target.style.color = 'rgb(172, 169, 169)'} 
        >
          Pricing
        </Button>
        <Button 
          variant="text"  
          style={buttonStyle}
          onMouseEnter={(e) => e.target.style.color = 'white'} 
          onMouseLeave={(e) => e.target.style.color = 'rgb(172, 169, 169)'} 
        >
          About
        </Button>
      </Stack>
    </div>
  );
}


function FunctionTwo() {
  return (
    <div className="heading-container">
      <div className="background-image">
      
        <motion.h2
          className="first-line"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 4.5,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01]
          }}
        >
          AI from the future.
        </motion.h2>
        <motion.p className="para"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 4.5,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }} >
      Envisioning the next era of innovation
    </motion.p>
      </div>
    </div>
  );
}


function MenuListComposition() {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const handleHover = (event) => {
    event.target.style.color = '#fff'
  };

  const handleMouseLeave = (event) => {
    event.target.style.color = '#8a8989'; 
  };

  return (
    <div>
      <Button
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? 'composition-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        style={{ background: '#393636', color: 'white', border: '2px solid transparent', borderColor: 'white', 
        marginRight: '10px', borderRadius: '50px', borderWidth: '1px',  padding: '10px 15px', cursor: 'pointer',
        top: '25px', right: '25px', position: 'absolute', fontSize: '12px'}}
      >
        Account
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom-start' ? 'left top' : 'left bottom',
            }}
          >

            <Paper style={{ marginTop: '5px', background: 'rgba(47, 47, 47, 0.7)', color: '#8a8989', borderRadius: '20px', borderColor: 'white', borderWidth: '1px', borderStyle: 'solid', padding: '10px 10px', height: '100px',  display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem 
                    onClick={handleClose}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleMouseLeave}
                  >
                    Login
                  </MenuItem>
                  <MenuItem 
                    onClick={handleClose}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleMouseLeave}
                  >
                    Register
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}



function FunctionThree() {
  return (
    <Container fluid>
    
      <Row className="mb-4" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '40px', marginBottom: '50px' }}>
        <Col md={4}>
          <motion.div
            className="page-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 4.5, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
          >
            <motion.div
              className="container1"
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
              style={{ backgroundImage: "url('https://img.freepik.com/premium-vector/text-files-concept_118813-2618.jpg?w=740')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
            >DOCUMENT READER
            </motion.div>
          </motion.div>
        </Col>
        <Col md={4}>
          <motion.div
            className="page-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 4.5, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
          >
            <motion.div
              className="container2"
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
              style={{ backgroundImage: "url('https://img.freepik.com/premium-vector/lady-doubt-with-hand-chin-gesture-young-woman-pointing-finger_262199-351.jpg?w=740')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
            >
            DESCRIBE/CAPTION IMAGES
            </motion.div>
          </motion.div>
        </Col>
        <Col md={4}>
          <motion.div
            className="page-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 4.5, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
          >
            <motion.div
              className="container3"
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
              style={{ backgroundImage: "url('https://img.freepik.com/free-vector/stamp-collecting-concept-illustration_114360-6913.jpg?t=st=1713251150~exp=1713254750~hmac=1287e0cecfa8fa46009d99e8bb209a461fbb87091230ffa9926c3461d577e2b2&w=740')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
            >
              IMAGE INSPECTION
            </motion.div>
          </motion.div>
        </Col>
      </Row>

      <Row className="mb-4" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '40px', marginBottom: '50px' }}>
        <Col md={4}>
          <motion.div
            className="page-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 4.5, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
          >
            <motion.div
              className="container4"
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
              style={{ backgroundImage: "url('https://img.freepik.com/free-vector/voice-chat-concept-illustration_114360-7629.jpg?t=st=1713251431~exp=1713255031~hmac=81f5c935b0ea2f468607bb65a20aedbe0cddd67bc9b2af020af8a45ea32c0451&w=900')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
            >
              GENERATE AUDIO
            </motion.div>
          </motion.div>
        </Col>
        <Col md={4}>
          <motion.div
            className="page-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 4.5, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
          >
            <motion.div
              className="container5"
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
              style={{ backgroundImage: "url('https://img.freepik.com/free-vector/voice-control-concept-illustration_114360-1389.jpg?w=740&t=st=1713251876~exp=1713252476~hmac=dd2a16cb5c69c8ee138579a9929eec79f0b821556e3f3fdc96a792c0d29c9c73')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
            >
            TRANSCRIBE AUDIO/SPEAKER DIARIZATION
            </motion.div>
          </motion.div>
        </Col>
        <Col md={4}>
          <motion.div
            className="page-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 4.5, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
          >
            <motion.div
              className="container6"
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
              style={{ backgroundImage: "url('https://img.freepik.com/free-vector/flat-man-using-ai-technology-help-answer-questions_88138-1387.jpg?t=st=1713253313~exp=1713256913~hmac=311b60dc76a82a901ffa380594de2d466dd01b73f236461c1ba9d6970c291f0d&w=900')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
            >
              GENERATE TEXT CONTENT
            </motion.div>
          </motion.div>
        </Col>
      </Row>
      
      
      <Row className="mb-4" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '40px', marginBottom: '50px' }}>
        <Col md={4}>
          <motion.div
            className="page-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 4.5, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
          >
            <motion.div
              className="container7" 
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
              style={{ backgroundImage: "url('https://img.freepik.com/free-vector/image-folder-concept-illustration_114360-114.jpg?t=st=1713253585~exp=1713257185~hmac=9acfa0c19a75ca895d158db719456c46fc19709c6dddd308dd4921c0b475bdfc&w=740')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
            >
              GENERATE IMAGES
            </motion.div>
          </motion.div>
        </Col>
        <Col md={4}>
          <motion.div
            className="page-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 4.5, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
          >
            <motion.div
              className="container8" 
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
              style={{ backgroundImage: "url('https://img.freepik.com/free-vector/video-upload-concept-illustration_114360-6773.jpg?t=st=1713253860~exp=1713257460~hmac=0366763885802fe7b92fb9a78fcef130b229ef26b1cbedce92bc5ea1f732d3ce&w=740')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
            >GENERATE VIDEOS
            </motion.div>
          </motion.div>
        </Col>
        <Col md={4}>
          <motion.div
            className="page-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 4.5, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
          >
            <motion.div
              className="container9" 
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
              style={{ backgroundImage: "url('https://img.freepik.com/premium-vector/man-chatting-with-chat-bot_19361-25.jpg?w=740')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
            >CHATBOTS ON USER DEFINED DATA
             </motion.div>
          </motion.div>
        </Col>
      </Row>

      <Row className="mb-4" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '40px', marginBottom: '50px' }}>
        <Col md={4}>
          <motion.div
            className="page-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 4.5, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
          >
            <motion.div
              className="container10" 
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
              style={{ backgroundImage: "url('https://img.freepik.com/premium-vector/artificial-intelligence-chat-service-business_951778-33255.jpg?w=740')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
            >
              PREDICTIVE ANALYTICS
            </motion.div>
          </motion.div>
        </Col>
        <Col md={4}>
          <motion.div
            className="page-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 4.5, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
          >
            <motion.div
              className="container11" 
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
              style={{ backgroundImage: "url('https://img.freepik.com/premium-vector/information-search-concept-with-man-magnifying-glass-search-information_675567-2798.jpg?w=900')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
            >
           AI SEARCH ENGINE
            </motion.div>
          </motion.div>
        </Col>
        <Col md={4}>
          <motion.div
            className="page-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 4.5, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
          >
            <motion.div
              className="container12" 
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
              style={{ backgroundImage: "url('https://img.freepik.com/free-vector/abstract-technology-sql-illustration_23-2149229481.jpg?t=st=1713255343~exp=1713258943~hmac=6d74f2b11d59132b4c9ca8757e0d4b015bcb32f5f6312ee1e959b1a937238d4c&w=740')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
            >
             QUERYING DATABASES
            </motion.div>
          </motion.div>
        </Col>
      </Row>

      <Row className="mb-4" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '40px', marginBottom: '50px' }}>
        <Col md={4}>
          <motion.div
            className="page-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 4.5, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
          >
            <motion.div
              className="container13" 
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
              style={{ backgroundImage: "url('https://img.freepik.com/premium-vector/check-contractcheck-signaturestudying-terms-agreement-signing-business-document_183665-254.jpg?w=740')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
            >DOCUMENT EXAMINER
            </motion.div>
          </motion.div>
        </Col>
        <Col md={4}>
          <motion.div
            className="page-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 4.5, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
          >
            <motion.div
              className="container14" 
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
              style={{ backgroundImage: "url('https://img.freepik.com/free-vector/hand-drawn-flat-design-sql-illustration_23-2149245997.jpg?t=st=1713256232~exp=1713259832~hmac=9d16b43849ff183defff07d8dd9051d0ae826430a11b243ca6611dd994f0ba9f&w=740')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
            >SQL QUERY GENERATOR
            </motion.div>
          </motion.div>
        </Col>
        <Col md={4}>
          <motion.div
            className="page-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 4.5, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
          >
            <motion.div
              className="container15" 
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
              style={{ backgroundImage: "url('https://img.freepik.com/premium-vector/people-connecting-puzzle-elements_171919-1126.jpg?w=740')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
            >COMMUNITY FOR BUILDERS
            </motion.div>
          </motion.div>
        </Col>
        </Row>

        <Row className="mb-4" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '40px', marginBottom: '50px' }}>
        <Col md={4}>
          <motion.div
            className="page-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 4.5, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
          >
            <motion.div
              className="container16" 
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
              style={{ backgroundImage: "url('https://img.freepik.com/free-vector/coding-concept-illustration_114360-4348.jpg?t=st=1713256823~exp=1713260423~hmac=3ad462422c9624d707c0194821129b3151a03d90ec1fc9a151c683bdf5df73f0&w=740')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
            >
             AI CODE ASSISTANT
            </motion.div>
          </motion.div>
        </Col>
        <Col md={4}>
          <motion.div
            className="page-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 4.5, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
          >
            <motion.div
              className="container17" 
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
              style={{ backgroundImage: "url('https://img.freepik.com/free-vector/robotic-process-automation-illustration_23-2149237081.jpg?t=st=1713257839~exp=1713261439~hmac=1cd3fa3751c23bcba8e55d823243a82f1de313668e61d6068dc930fa09551911&w=740')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
            >REGEX ASSISTANT
            </motion.div>
          </motion.div>
        </Col>
        <Col md={4}>
          <motion.div
            className="page-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 4.5, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
          >
            <motion.div
              className="container18" 
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
              style={{ backgroundImage: "url('https://img.freepik.com/premium-vector/server-room-icon-isometric-design-premium-download_203633-1287.jpg?w=740')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
            >DATABASE ASSISTANT
            </motion.div>
          </motion.div>
        </Col>
        </Row>

        <Row className="mb-4" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '40px', marginBottom: '50px' }}>
        <Col md={4}>
          <motion.div
            className="page-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 4.5, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
          >
            <motion.div
              className="container19" 
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
              style={{ backgroundImage: "url('https://img.freepik.com/free-vector/front-end-concept-illustration_114360-22213.jpg?t=st=1713258959~exp=1713262559~hmac=0e8172e4694b7585c7436a1227683b6585386c628214b40833536d2eb08c9cbd&w=740')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
            >FIGMA DESIGNS
            </motion.div>
          </motion.div>
        </Col>
        <Col md={4}>
          <motion.div
            className="page-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 4.5, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
          >
            <motion.div
              className="container20" 
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
              style={{ backgroundImage: "url('https://img.freepik.com/free-vector/music-concept-illustration_114360-1185.jpg?t=st=1713259201~exp=1713262801~hmac=6f7439538fb4a1eb7dc0a12878cc44618139e0c7a469553c19d61c0637f4fe59&w=740')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
            >GENERATE MUSIC
            </motion.div>
          </motion.div>
        </Col>
        <Col md={4}>
          <motion.div
            className="page-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 4.5, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
          >
            <motion.div
              className="container21" 
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
              style={{ backgroundImage: "url('https://img.freepik.com/free-vector/solving-problem-concept-difficult-work-teamwork-assemble-effective-business-solution-strategy_513217-186.jpg?t=st=1713262405~exp=1713266005~hmac=3d0d82113d774c70a323aa6eb6314db09429d6069d375c57b820e4a9d9087d6c&w=740')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
            >COMBINING SERVICES
            </motion.div>
          </motion.div>
        </Col>
        </Row>
    </Container>
  );
}


const MyForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform any actions with the form data, like sending it to a server
    console.log(formData);
  };

  return (
    <div className="form-container" style={{ marginBottom: '20px' }}>
      <h2 style={{ textAlign: 'center', fontFamily: 'Bold', fontSize: '30px', marginBottom: '50px', color: '#aeb44e' }}>Let the collaboration begin!</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="firstName" style={{ display: 'block', marginBottom: '1rem' }}>First Name <span style={{ color: 'red' }}>*</span></label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '1rem', fontSize: '1rem', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="lastName" style={{ display: 'block', marginBottom: '1rem' }}>Last Name <span style={{ color: 'red' }}>*</span></label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '1rem', fontSize: '1rem', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '1rem' }}>Email <span style={{ color: 'red' }}>*</span></label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '1rem', fontSize: '1rem', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="contactNumber" style={{ display: 'block', marginBottom: '1rem' }}>Contact Number <span style={{ color: 'red' }}>*</span></label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '1rem', fontSize: '1rem', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <div className="submit-button-container">
  <button type="submit" className="submit-button">SUBMIT</button>
</div>
        
      </form>
    </div>
  );
};


function Footer() {
  return (
    <MDBFooter className='text-white'>
      <MDBContainer className='p-4'>
      <div className="social-icons text-center">
    <a href="https://www.facebook.com" className="icon-link">
      <FontAwesomeIcon icon={faFacebookF} className="icon" />
    </a>
    <a href="https://www.twitter.com" className="icon-link">
      <FontAwesomeIcon icon={faTwitter} className="icon" />
    </a>
    <a href="https://www.instagram.com" className="icon-link">
      <FontAwesomeIcon icon={faInstagram} className="icon" />
    </a>
    <a href="https://www.linkedin.com" className="icon-link">
      <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
    </a>
  </div>
</MDBContainer>
<div className='text-center p-3 copyright-text'>
  Copyright © 2024 ELENDIL
</div>
</MDBFooter>
);
}


export { FunctionOne, FunctionTwo, FunctionThree, MenuListComposition, MyForm, Footer };