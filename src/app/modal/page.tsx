'use client';

import { useContext } from 'react';
import { useRouter } from 'next/navigation';
import ModalProvider, { ModalContext } from '@/modal/modal-provider';

const NestedReactComponent = () => {
  const { show, hide } = useContext(ModalContext);
  const router = useRouter();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <button
        onClick={() =>
          show({
            title: '안녕',
            description: '세상',
            confirmButton: '화화확인',
            cancelButton: '취취취소',
            confirmCallback: () => {
              router.push('/');
            },
            useCancelButton: false,
          })
        }
      >
        켜기 A
      </button>
      <button onClick={() => show({ title: 'Hello', description: 'World' })}>
        켜기 B
      </button>
      <button
        onClick={() =>
          show({ title: '----', description: 'ㅁㄴㅇㅁ너ㅏㅗ어ㅏ' })
        }
      >
        켜기 C
      </button>
      <button
        onClick={() =>
          show({ title: '129ㅗㄷㅁㅈ', description: 'ㅁㄴ우ㅏㅣㅁ누ㅏㅣ' })
        }
      >
        켜기 D
      </button>
      <button onClick={() => hide()}>끄기</button>
    </div>
  );
};

export default function GlobalState() {
  //const { show, hide } = useContext(ModalContext)
  return (
    <main>
      {/* <button onClick={() => show()}>켜기</button> */}
      {/* <button onClick={() => hide()}>끄기</button> */}
      <ModalProvider>
        <NestedReactComponent />
      </ModalProvider>
    </main>
  );
}

// const title = 'Text in a modal'
// const description =
//   'Duis mollis, est non commodo luctus, nisi erat porttitor ligula.'
