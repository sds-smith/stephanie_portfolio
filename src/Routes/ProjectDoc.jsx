import {useState, useEffect, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { ProjectContext } from '../context/ProjectContext';

function ProjectDoc() {
    const navigate = useNavigate();
    const {selectedProject} = useContext(ProjectContext);
    const [docPages, setDocPages] = useState(null);

    function onDocumentLoadSuccess({ numPages }) {
      const pages = [];
      for (let i = 1; i <= numPages; i ++) {
        pages.push(i);
      };
      setDocPages(pages)
    }

    useEffect(() => {
      if (!selectedProject) {
        navigate('/');
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return (
      <div style={{paddingTop: '80px', width: '100vw', display: 'flex', justifyContent: 'center'}}>
          {
              selectedProject
                  ? <Document file={selectedProject.documentUrl} maxWidth='100vw' onLoadSuccess={onDocumentLoadSuccess} >
                      {
                        docPages?.map(page => (
                            <Paper
                                elevation={12}
                                sx={{margin: '12px 0px'}}
                            >
                                <Page 
                                    pageNumber={page} 
                                    renderTextLayer={false} 
                                    renderAnnotationLayer={false} 
                                />
                            </Paper>  
                        ))
                      }
                    </Document>
                  : null
          }
      </div>

    )
}

export default ProjectDoc