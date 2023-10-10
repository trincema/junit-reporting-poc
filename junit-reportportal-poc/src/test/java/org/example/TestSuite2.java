package org.example;

import com.epam.reportportal.junit5.ReportPortalExtension;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

@ExtendWith(ReportPortalExtension.class)
public class TestSuite2 {

    private static final Logger LOGGER = LogManager.getLogger(TestSuite2.class);

    @Test
    void testCase1() {
        assert false;
        LOGGER.info("Hello from my simple test");
    }

    @Test
    void testCase2() {
        assert false;
    }
}