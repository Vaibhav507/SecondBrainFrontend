import { useState } from 'react'
import Button from '../components/Button'
import Card from '../components/Card'
import { CreateContentModal } from '../components/CreateContentModal'
import { PlusIcon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareIcon'
import { Sidebar } from '../components/Sidebar'
import { useContent } from '../hooks/useContent'
import { BACKEND_URL } from '../config'
import axios from 'axios'

function Dashboard() {

  const [modalOpen, setModalOpen] = useState(false);
  const content = useContent();
  

  return (
    <div className=''>
      <CreateContentModal open={modalOpen} onClose={() => {
          setModalOpen(false);
        }} />
      <Sidebar />
      <div className="p-4 ml-72 h-screen bg-gray-100 flex flex-col gap-8">
        <div className="flex justify-between items-center">
          All Notes
          <div className="flex gap-4 justify-center items-center">
            <Button variant='secondary'  startIcon={<ShareIcon />} text='Share Brain' onClick={async () => {
              const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`, {
                share: true
              }, {
                headers: {
                  "token" : localStorage.getItem("token")
                }
              });
              console.log(response.data);
              const shareUrl = `http://localhost:5173/share/${response.data.hash}`;
              alert(shareUrl);

            }}/>
            <Button variant='primary' startIcon={<PlusIcon />} text='Add Content' onClick={()=>{ setModalOpen(true); }} />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {content.map(({title, type, link}) => 
            <Card title={title}
                  type={type}
                  link={link}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
