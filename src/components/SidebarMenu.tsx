import { useEffect, useState, type JSX } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // ✅ import
import styles from '../styles/sidebar.module.css';
import type { MenuItem } from '../data/menuItems';

interface SidebarWrapperProps {
  items: MenuItem[];
  isOnStartOpen?: boolean;
}

export default function SidebarMenuWrapper({ items, isOnStartOpen = false }: SidebarWrapperProps) {
  const [isOpen, setIsOpen] = useState(isOnStartOpen);
  const [openMenus, setOpenMenus] = useState<Set<string>>(new Set());

  function toggle(label: string) {
    setOpenMenus((prev) => {
      const updated = new Set(prev);
      updated.has(label) ? updated.delete(label) : updated.add(label);
      return updated;
    });
  }

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (isOpen && (e.target as HTMLElement).closest(`.${styles.sidebar}`) === null) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  function renderItems(items: MenuItem[], level: number = 0): JSX.Element {
    return (
      <ul
        className={level === 0 ? styles.menu : styles.submenu}
        style={{ paddingLeft: `${level * 16}px` }}
      >
        {items.map((item) => {
          const isOpenItem = openMenus.has(item.label);
          const hasChildren = !!item.children;

          return (
            <li key={item.label}>
              <div className={styles.menuItem} onClick={() => hasChildren && toggle(item.label)}>
                <span>{item.label}</span>
                {hasChildren && <span className={styles.arrow}>{isOpenItem ? '▾' : '▸'}</span>}
              </div>

              {hasChildren && isOpenItem && renderItems(item.children!, level + 1)}
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <>
      <button className={styles.openSidebarBtn} onClick={() => setIsOpen(true)}>
        Open Sidebar
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={styles.sidebar}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              {renderItems(items)}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
