import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useRouter } from 'next/router';

function SignInModal(props) {
    const router = useRouter();
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      contentClassName="rounded-1"
      // animation={true}
    >
      {/* <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {}
        </Modal.Title>
      </Modal.Header> */}
      <Modal.Body>
        <h4>Sign in</h4>
        <p>
          Sign in to add items to wishlist.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <div className='w-10 d-flex flex-row gap-3'>
        <button className='p-2 border-0 rounded' onClick={props.onHide}>Close</button> 
        <button className='p-2 border-0 rounded' onClick={()=>router.push("/login")}>Sign in</button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
export default SignInModal;