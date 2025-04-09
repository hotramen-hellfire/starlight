import Abouts from '@/components/About/Abouts'
import Contacts from '@/components/Contacts/Contacts'
import Projects from '@/components/Projects/Projects'
import Quote from '@/components/Quote/Quote'
import School from '@/components/School/School'
import { Flex, Stack } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { dataName } from '../../data'
export default function Home() {
  const [quoteLoading1, setQuoteLoading1] = useState(false);
  const [quoteLoading2, setQuoteLoading2] = useState(false);
  const [quoteLoading3, setQuoteLoading3] = useState(false);
  const [q1, setq1] = useState({
    text: "",
    author: ""
  })
  const [q2, setq2] = useState({
    text: "",
    author: ""
  })
  const [q3, setq3] = useState({
    text: "",
    author: ""
  })
  useEffect(() => {
    async function updateQuote(setQuote: any, setLoading: any) {
      setLoading(true);
      try {
        const response = await fetch("https://api.quotable.io/random?tags=humorous");
        const data = await response.json();
  
        if (response.ok) {
          setQuote({ text: data.content, author: data.author });
        } else {
          setQuote({ text: "", author: "Unknown" });
        }
      } catch (error) {
        console.error("Failed to fetch quote:", error);
        setQuote({ text: "", author: "Fetch Error" });
      } finally {
        setLoading(false);
      }
    }
  
    if (!q1.text) updateQuote(setq1, setQuoteLoading1);
    if (!q2.text) updateQuote(setq2, setQuoteLoading2);
    if (!q3.text) updateQuote(setq3, setQuoteLoading3);
  }, []); // <- Add empty dependency array  

  return (
    <>
      <Stack
        m={{ base: 4, md: 9 }}
        justify={'center'}
        align={'center'}
        flexDirection={'column'}
      >
        <Abouts />
        {q1.text && <Quote text={q1.text} author={q1.author} loading={quoteLoading1} />}
        <Projects />
        {q2.text && <Quote text={q2.text} author={q2.author} loading={quoteLoading2} />}
        <School />
        {q3.text && <Quote text={q3.text} author={q3.author} loading={quoteLoading3} />}
        <Contacts />
      </Stack>
    </>
  )
}
